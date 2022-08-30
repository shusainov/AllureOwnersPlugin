'use strict';

allure.api.addTranslation('en', {
    tab: {
        owners: {
            name: 'Owners'
        }
    }
});

allure.api.addTranslation('ru', {
    tab: {
        owners: {
            name: 'Владелец'
        }
    }
});

allure.api.addTab('owners', {
    title: 'tab.owners.name', icon: 'fa fa-align-left',
    route: 'owners(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',
    onEnter: (function (testGroup, testResult, testResultTab) {
        return new allure.components.TreeLayout({
            testGroup: testGroup,
            testResult: testResult,
            testResultTab: testResultTab,
            tabName: 'tab.owners.name',
            baseUrl: 'owners',
            url: 'data/owners.json'
        });
    })
});
