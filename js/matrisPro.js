export async function readCSVFile(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Dosya bulunamadı');
        }

        const text = await response.text();
        const rows = text.trim().split('\n');
        const data = rows.map(row => row.split(','));

        return data;
    } catch (error) {
        console.error('CSV dosyasını alma veya işleme hatası:', error);
        return null;
    }
}