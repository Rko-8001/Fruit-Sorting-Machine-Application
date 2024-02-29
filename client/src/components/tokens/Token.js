/* 
options: 
    sort by category:
        color
        size
        defect
        bypass
    option phase:
        sortPage: sort category page
        disclaimer: final step page
        machine: machine on page
*/

export const setSortCategory = (category) => {
    const existingOption = sessionStorage.getItem('optionData');

    if (existingOption) {
        const existingOptionData = JSON.parse(existingOption);
        existingOptionData.sortCategory = category;
        sessionStorage.setItem('optionData', JSON.stringify(existingOptionData));
    }
    else {
        const optionData = {
            sortCategory: category,
            optionPhase: 1,
        }
        sessionStorage.setItem('optionData', JSON.stringify(optionData));
    }
}

export const getSortCategory = () => {
    const existingOption = sessionStorage.getItem('optionData');
    if (existingOption) {
        const existingOptionData = JSON.parse(existingOption);
        return existingOptionData.sortCategory;
    }
    // default sort category is color
    return "color";
}

export const setOptionPhase = (phase) => {
    const existingOption = sessionStorage.getItem('optionData');

    if (existingOption) {
        const existingOptionData = JSON.parse(existingOption);
        existingOptionData.optionPhase = phase;
        sessionStorage.setItem('optionData', JSON.stringify(existingOptionData));
    }
    else {
        const optionData = {
            // default sort category is color
            sortCategory: "color",
            optionPhase: phase,
        }
        sessionStorage.setItem('optionData', JSON.stringify(optionData));
    }
}

export const getOptionPhase = () => {
    const existingOption = sessionStorage.getItem('optionData');
    if (existingOption) {
        const existingOptionData = JSON.parse(existingOption);
        return existingOptionData.optionPhase;
    }
    return "sortPage";
}


export const setSessionStatistics = (stat) => {
    sessionStorage.setItem('sessionStat', JSON.stringify(stat));
}

export const getSessionStatistics = () => {
    const existingStat = sessionStorage.getItem('sessionStat');
    return JSON.parse(existingStat);
}
