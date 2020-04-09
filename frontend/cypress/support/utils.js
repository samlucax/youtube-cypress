// const pay = require('../fixtures/requests/post-ong.json');

// export function payload(fixture) {
//     let payload = getPayloadFixture(fixture);
//     return JSON.stringify(payload);
// }

// function getPayloadFixture(fixture){
//     switch (fixture) {
//         case 'post-ong':
//             return pay;
//     }
// }
const BACKEND_HOST = "http://localhost:3333";

export function registerOngAndSaveDataAsFixture(fixture){
    let ongId;

    cy.request({
        method: 'POST',
        url: `${BACKEND_HOST}/ongs`,
        headers: { Accept: 'application/json' },
        body: {
            name: 'Dogs Queridos',
            email: 'dogs@mail.com',
            whatsapp: '51999999999',
            city: 'Porto Alegre',
            uf: 'RS'
        }
    }).then((res) => {
        cy.log(res.body.id);
        // cy.writeFile(`cypress/fixtures/${fixture}.json`, 
        // { 
        //     id: res.body.id
        // });
        ongId = res.body.id
    });

    // cy.log('passou aqui' + ongId);
    return ongId;
}