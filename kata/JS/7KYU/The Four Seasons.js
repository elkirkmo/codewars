function fourSeasons(d) {
    let season = '';
    if (d > 79 && d < 169) {
        season = 'Spring Season';
    } else if (d > 170 && d < 263) {
        season = 'Summer Season';
    } else if (d > 263 && d < 354) {
        season = 'Autumn Season';
    } else if (d > 365) {
        season = 'The year flew by!';
    } else {
        season = 'Winter Season';
    }
    return season;
}