
// JAVASCRIPT
/*
const tabListItems = document.querySelectorAll('.tab__list .tab__item')
const tabPanels = document.querySelectorAll('.panel-container .tab-panel')


tabListItems.forEach((list) => {
    list.addEventListener('click', () => {
        // CHANGE ACTIVE STATE OF TAB LIST
        tabListItems.forEach((list) => list.classList.remove('active'))
        
        list.classList.add('active')


        // HANDLE TAB PANEL STATE
        tabPanels.forEach(panel => panel.classList.remove('active'))

        const id = list.dataset.tab
        document.querySelector(id).classList.add('active')
    })
})

*/


// JQUERY
const lists = $('.tab__list .tab__item')
const panels = $('.panel-container .tab-panel')

lists.on('click', (e) => {
    // CHANGE ACTIVE STATE OF TAB LIST
    lists.removeClass('active')
    $(e.target).addClass('active')

    // HANDLE TAB PANEL ACTIVE STATE
    panels.removeClass('active')
    $($(e.target).data('tab')).addClass('active')   
    
})