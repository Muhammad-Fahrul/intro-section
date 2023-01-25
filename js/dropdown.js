const dropDExpands = (i) => {
    dropDExp[i].classList.toggle('d-block');
}

const arrowDir = (i) => {
    const span2nth = drDmenu[i].querySelector('span:nth-child(2)');
    span2nth.classList.toggle('chDir');
    if (!span2nth.classList.contains('chDir')) {
        span2nth.innerHTML = `<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="#686868"  stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
                                  </svg>`
    } else {
        span2nth.innerHTML = `<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>
                                  </svg>`
    }
}
