function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours > 0 ? `${hours} jam ` : ''}${remainingMinutes > 0 ? `${remainingMinutes} menit` : ''}`;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = ("0" + date.getDate()).slice(-2); 
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`; 

    const monthName = date.toLocaleString('id-ID', { month: 'long' });

    return { formattedDate, monthName };
}

export { formatDuration, formatDate };