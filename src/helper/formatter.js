export const formatRupiah = (num) => {
	const formatter = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	});

	const result = formatter.format(num)
	
	if(Number.isNaN(num)){
		return ""
	}

	return result
}

export const deformatRupiah = (num) => {
	try {
		const result = num.replace(/[^\d]/g, '');
		return parseFloat(result);
	} catch(e){
		return ''
	}
}
