document.addEventListener('DOMContentLoaded', function () {
    const cityArray = [
        {
            displayName: 'Canandaigua, NY',
            devName: 'canandaigua',
            phone: '+1	585	393 0001',
            adress: '151 Charlotte Street',
        },

        {
            displayName: 'New York City',
            devName: 'ny',
            phone: '+1	212	456 0002',
            adress: '9 East 91st Street',
        },

        {
            displayName: 'Yonkers, NY',
            devName: 'yonkers',
            phone: '+1	914	678 0003',
            adress: '511 Warburton Ave',
        },

        {
            displayName: 'Sherrill, NY',
            devName: 'sherrill',
            phone: '+1	315	908 0004',
            adress: '14 WEST Noyes BLVD',
        },
    ]

    const burgerButton = document.querySelector('#burger-button');
    const openBurger = document.querySelector('#open-burger');
    const closeBurger = document.querySelector('#close-burger');
    const menu = document.querySelector('#menu');
    const gardenButton = document.querySelector('#garden-button');
    const lawnButton = document.querySelector('#lawn-button');
    const plantButton = document.querySelector('#plant-button');
    const basicsArrowDown = document.querySelector('#basics-arrow-down');
    const basicsArrowUp = document.querySelector('#basics-arrow-up');
    const standardArrowDown = document.querySelector('#standard-arrow-down');
    const standardArrowUp = document.querySelector('#standard-arrow-up');
    const proCareArrowDown = document.querySelector('#pro-care-arrow-down');
    const proCareArrowUp = document.querySelector('#pro-care-arrow-up');
    const orderButtons = document.querySelectorAll('.extra-content-button');
    const contactsSection = document.querySelector('#contacts');
    let selectedPriceCard = null;
    let selectedCity = null;
    const cityArrowDown = document.querySelector('#city-selection-arrow-down');
    const cityArrowUp = document.querySelector('#city-selection-arrow-up');


    burgerButton.addEventListener('click', (event) => {
        event.stopPropagation();
        openBurger.classList.toggle('hide-burger');
        closeBurger.classList.toggle('hide-burger');
        menu.classList.toggle('menu-panel-open');
    })

    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && menu.classList.contains('menu-panel-open')) {
            menu.classList.remove('menu-panel-open');
            openBurger.classList.toggle('hide-burger');
            closeBurger.classList.toggle('hide-burger');
        }
    });

    const links = document.querySelectorAll('[data-menu-link]');
    links.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.stopPropagation();
            menu.classList.remove('menu-panel-open');
            openBurger.classList.toggle('hide-burger');
            closeBurger.classList.toggle('hide-burger');
        })
    })


    gardenButton.addEventListener('click', function (event) {
        //  if две кнопки return
        const isPlantSelected = plantButton.getAttribute('data-selected') === "true";
        const isLawnSelected = lawnButton.getAttribute('data-selected') === "true";
        if (isPlantSelected && isLawnSelected) {
            return;
        }

        // ставим новое значение в кнопку
        const oldSelected = gardenButton.getAttribute('data-selected') === "true";
        // oldSelected equals to false
        if (oldSelected) {
            gardenButton.setAttribute('data-selected', "false")
        } else {
            gardenButton.setAttribute('data-selected', "true")
        }
        // new state is anti old state
        const isSelected = !oldSelected;

        // пришел массив
        //  blur/anti blur - своих
        if (!(!isSelected && !isPlantSelected && !isLawnSelected)) {
            const gardenCards = document.querySelectorAll('[data-card-type="Gardening"]');
            for (let i = 0; i < gardenCards.length; i++) {
                // каждому элементу ставим в true
                if (isSelected) {
                    gardenCards[i].setAttribute('data-blured', "false");
                } else {
                    gardenCards[i].setAttribute('data-blured', "true");
                }
            }
        }
        // blur чужих
        if (!isPlantSelected && !isLawnSelected) {
            const otherCards = document.querySelectorAll('[data-card-type]:not([data-card-type="Gardening"])');
            for (let i = 0; i < otherCards.length; i++) {
                if (isSelected) {
                    otherCards[i].setAttribute('data-blured', "true");
                } else {
                    otherCards[i].setAttribute('data-blured', "false");
                }
            }
        }
    })

    plantButton.addEventListener('click', function (event) {
        //  if две кнопки return
        const isGardenSelected = gardenButton.getAttribute('data-selected') === "true";
        const isLawnSelected = lawnButton.getAttribute('data-selected') === "true";

        if (isGardenSelected && isLawnSelected) {
            return;
        }

        // ставим новое значение в кнопку
        const oldSelected = plantButton.getAttribute('data-selected') === "true";
        console.log('oldSelected ', oldSelected);
        // oldSelected equals to false
        if (oldSelected) {
            console.log('1');
            plantButton.setAttribute('data-selected', "false")
        } else {
            console.log('2');
            plantButton.setAttribute('data-selected', "true")
        }
        // new state is anti old state
        const isSelected = !oldSelected;

        // пришел массив
        //  blur/anti blur - своих
        if (!(!isSelected && !isGardenSelected && !isLawnSelected)) {
            const plantCards = document.querySelectorAll('[data-card-type="Planting"]');
            for (let i = 0; i < plantCards.length; i++) {
                // каждому элементу ставим в true
                if (isSelected) {
                    plantCards[i].setAttribute('data-blured', "false");
                } else {
                    plantCards[i].setAttribute('data-blured', "true");
                }
            }
        }
        // blur чужих
        if (!isGardenSelected && !isLawnSelected) {
            const otherCards = document.querySelectorAll('[data-card-type]:not([data-card-type="Planting"])');
            for (let i = 0; i < otherCards.length; i++) {
                if (isSelected) {
                    otherCards[i].setAttribute('data-blured', "true");
                } else {
                    otherCards[i].setAttribute('data-blured', "false");
                }
            }
        }
    })

    lawnButton.addEventListener('click', function (event) {
        //  if две кнопки return
        const isGardenSelected = gardenButton.getAttribute('data-selected') === "true";
        const isPlantSelected = plantButton.getAttribute('data-selected') === "true";

        if (isGardenSelected && isPlantSelected) {
            return;
        }

        // ставим новое значение в кнопку
        const oldSelected = lawnButton.getAttribute('data-selected') === "true";
        console.log('oldSelected ', oldSelected);
        // oldSelected equals to false
        if (oldSelected) {
            console.log('1');
            lawnButton.setAttribute('data-selected', "false")
        } else {
            console.log('2');
            lawnButton.setAttribute('data-selected', "true")
        }
        // new state is anti old state
        const isSelected = !oldSelected;

        // пришел массив
        //  blur/anti blur - своих
        if (!(!isSelected && !isGardenSelected && !isPlantSelected)) {
            const lawnCards = document.querySelectorAll('[data-card-type="Lawn"]');
            for (let i = 0; i < lawnCards.length; i++) {
                // каждому элементу ставим в true
                if (isSelected) {
                    lawnCards[i].setAttribute('data-blured', "false");
                } else {
                    lawnCards[i].setAttribute('data-blured', "true");
                }
            }
        }
        // blur чужих
        if (!isGardenSelected && !isPlantSelected) {
            const otherCards = document.querySelectorAll('[data-card-type]:not([data-card-type="Lawn"])');
            for (let i = 0; i < otherCards.length; i++) {
                if (isSelected) {
                    otherCards[i].setAttribute('data-blured', "true");
                } else {
                    otherCards[i].setAttribute('data-blured', "false");
                }
            }
        }
    })

    basicsArrowDown.addEventListener('click', function (event) {
        closeActivePriceCard()
        const basicsExtraContent = document.querySelector('#basics-expanded-content');
        const basicsCard = document.querySelector('#basics-card');
        basicsExtraContent.dataset.expanded = 'true';
        basicsCard.dataset.expanded = 'true';
        basicsArrowUp.dataset.expanded = 'true';
        basicsArrowDown.dataset.expanded = 'true';
        selectedPriceCard = 'basics';
    });

    basicsArrowUp.addEventListener('click', function (event) {
        const basicsExtraContent = document.querySelector('#basics-expanded-content');
        const basicsCard = document.querySelector('#basics-card');
        basicsExtraContent.dataset.expanded = 'false';
        basicsCard.dataset.expanded = 'false';
        basicsArrowUp.dataset.expanded = 'false';
        basicsArrowDown.dataset.expanded = 'false';
        selectedPriceCard = null;
    });

    standardArrowDown.addEventListener('click', function (event) {
        closeActivePriceCard()
        const standardExtraContent = document.querySelector('#standard-expanded-content');
        const standardCard = document.querySelector('#standard-card');
        standardExtraContent.dataset.expanded = 'true';
        standardCard.dataset.expanded = 'true';
        standardArrowUp.dataset.expanded = 'true';
        standardArrowDown.dataset.expanded = 'true';
        selectedPriceCard = 'standard';
    });

    standardArrowUp.addEventListener('click', function (event) {
        const standardExtraContent = document.querySelector('#standard-expanded-content');
        const standardCard = document.querySelector('#standard-card');
        standardExtraContent.dataset.expanded = 'false';
        standardCard.dataset.expanded = 'false';
        standardArrowUp.dataset.expanded = 'false';
        standardArrowDown.dataset.expanded = 'false';
        selectedPriceCard = null;
    });

    proCareArrowDown.addEventListener('click', function (event) {
        closeActivePriceCard();
        const proCareExtraContent = document.querySelector('#pro-care-expanded-content');
        const proCareCard = document.querySelector('#pro-care-card');
        proCareExtraContent.dataset.expanded = 'true';
        proCareCard.dataset.expanded = 'true';
        proCareArrowUp.dataset.expanded = 'true';
        proCareArrowDown.dataset.expanded = 'true';
        selectedPriceCard = 'pro-care';
    });

    proCareArrowUp.addEventListener('click', function (event) {
        const proCareExtraContent = document.querySelector('#pro-care-expanded-content');
        const proCareCard = document.querySelector('#pro-care-card');
        proCareExtraContent.dataset.expanded = 'false';
        proCareCard.dataset.expanded = 'false';
        proCareArrowUp.dataset.expanded = 'false';
        proCareArrowDown.dataset.expanded = 'false';
        selectedPriceCard = null;
    });
    // const btnArray = querySelector;
    // for (let i = 0, i < btnArray) {
    //          btnArray[i].addEventListener('click', function (event) {
    // selectCity(btnArray[i]);
    // })
    // }



    // btn.addEventListener('click', function (event) {
    // selectCity(btn);
    // })

    for (let i = 0; i < orderButtons.length; i++) {
        const orderButton = orderButtons[i];
        orderButton.addEventListener('click', function (event) {
            contactsSection.scrollIntoView();
        })
    }

    const buttonsArray = document.querySelectorAll('.city-buttons');
    for (let i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].addEventListener('click', function (event) {
            closeCitySelection();
            selectCity(buttonsArray[i]);
        })
    }

    cityArrowDown.addEventListener('click', function () {
        const citySelection = document.querySelector('#city-selection-line');
        const cityExtraContent = document.querySelector('#city-opened-content');
        citySelection.dataset.opened = 'true';
        cityExtraContent.dataset.opened = 'true';
        cityArrowUp.dataset.opened = 'true';
        cityArrowDown.dataset.opened = 'true';
        const citySelectionTitle = document.querySelector('#city-selection-title');
        citySelectionTitle.dataset.active = 'true';
        const cityCard = document.querySelector('#city-card');
        cityCard.dataset.opened = 'false';
    })

    cityArrowUp.addEventListener('click', function () {
        const citySelection = document.querySelector('#city-selection-line');
        const cityExtraContent = document.querySelector('#city-opened-content');
        citySelection.dataset.opened = 'false';
        cityExtraContent.dataset.opened = 'false';
        cityArrowUp.dataset.opened = 'false';
        cityArrowDown.dataset.opened = 'false';
        if (!selectedCity) {
            const citySelectionTitle = document.querySelector('#city-selection-title');
            citySelectionTitle.dataset.active = 'false';
        } else {
            const cityCard = document.querySelector('#city-card');
            cityCard.dataset.opened = 'true';
        }
    })

    function closeCitySelection() {
        const citySelection = document.querySelector('#city-selection-line');
        const cityExtraContent = document.querySelector('#city-opened-content');
        citySelection.dataset.opened = 'false';
        cityExtraContent.dataset.opened = 'false';
        cityArrowUp.dataset.opened = 'false';
        cityArrowDown.dataset.opened = 'false';
    }


    function closeActivePriceCard() {
        if (!selectedPriceCard) {
            return;
        }
        const priceCardId = `${selectedPriceCard}-card`;
        const arrowImageDownId = `${selectedPriceCard}-arrow-down`;
        const arrowImageUpId = `${selectedPriceCard}-arrow-up`;
        const expandedContentId = `${selectedPriceCard}-expanded-content`;
        const priceCardElement = document.querySelector('#' + priceCardId);
        const arrowImageDownElement = document.querySelector('#' + arrowImageDownId);
        const arrowImageUpElement = document.querySelector('#' + arrowImageUpId);
        const expandedContentElement = document.querySelector('#' + expandedContentId);
        priceCardElement.dataset.expanded = 'false';
        arrowImageDownElement.dataset.expanded = 'false';
        arrowImageUpElement.dataset.expanded = 'false';
        expandedContentElement.dataset.expanded = 'false';
    }

    function selectCity(button) {
        // функция вызывается по нажатию на ЛЮБУЮ из кнопок сити
        // 
        // 1 понять какой город мы выьрали
        // 1.1 const devName = button.dataset.city;
        // 2 записать кто выбран
        // 3 достать информацию из массива
        // 4 информацию из массива вставить через js в карточку
        // 5 открыть карточку
        if (selectedCity) {
            const previousSelected = document.querySelector(`[data-city='${selectedCity}']`);
            previousSelected.dataset.selected = 'false';
        }
        const citySelectionTitle = document.querySelector('#city-selection-title');
        citySelectionTitle.dataset.active = 'true';
        button.dataset.selected = 'true';
        const devName = button.dataset.city;
        // 
        /*
            cityInfo = {
                devName: '',
                addres: ''
            }
        
        */
        const cityInfo = cityArray.find((value) => {
            return value.devName === devName;
        })
        selectedCity = cityInfo.devName;
        const changeCityTitle = document.querySelector('#change-city-title');
        changeCityTitle.textContent = cityInfo.displayName;
        
        const cityNameSpan = document.querySelector('#city-name');
        const cityPhoneSpan = document.querySelector('#city-phone-number');
        const cityAdressSpan = document.querySelector('#city-adress');
        const cityCallUs = document.querySelector('#city-call-us');
        cityNameSpan.textContent = cityInfo.displayName;
        cityPhoneSpan.textContent = cityInfo.phone;
        cityAdressSpan.textContent = cityInfo.adress;
        cityCallUs.href = `tel:${cityInfo.phone.replace(/\s/g, '')}`;
        const cityCard = document.querySelector('#city-card');
        cityCard.dataset.opened = 'true';
    }
})
