btnBurger.addEventListener('click', collapseNav);

dropDBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        dropDExpands(i);
        arrowDir(i);
    })
})