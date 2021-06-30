var generateQRCode = (function() {
    var qrInput = document.getElementById('url');
    var qrContainer = document.getElementById('qrcode');
    var qrCode = new QRCode(qrContainer, qrInput.value);

    function generateQRCode() {
        qrCode.clear();
        qrCode.makeCode(qrInput.value)
    }
    return generateQRCode;
}())

function downloadClick () {
	var img = document.getElementById('qrcode').getElementsByTagName('img')[0];
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	canvas.getContext('2d').drawImage(img, 0, 0);
	url = canvas.toDataURL('image/png');
	var downloadLink = document.getElementById('downloadLink');
	downloadLink.setAttribute('href', url);
	downloadLink.setAttribute('download', 'QR');
	downloadLink.click();
}