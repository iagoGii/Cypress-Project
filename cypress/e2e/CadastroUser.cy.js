/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';
import screensData from '../fixtures/screens_mobile.json';


const user_date = require('../fixtures/user_create.json')
const { screens } = screensData;


screens.forEach(element => {
    describe('Cadastro de usuário', () => {

        beforeEach('Acessando página de cadastro', () => {

            //Verificando se o elemento for diferente de desktop, então chama o viewport com o tamanho da tela.
            if (element != 'desktop') {
                cy.viewport(element)
            }

            //Acessar tela de cadastro de usuário
            cy.accessRegisterPage()
        })

        it('Validar campo nome vazio', () => {

            cy.SaveRegister()
            cy.messageError('O campo nome deve ser prenchido')

        });

        it('Validar campo e-mail vazio', () => {

            cy.fillName(user_date.name)
            cy.SaveRegister()
            cy.messageError('O campo e-mail deve ser prenchido corretamente')

        });

        it('Validar campo e-mail inválido', () => {

            cy.fillName(user_date.name)
            cy.fillEmail('emailinválido')
            cy.SaveRegister()
            cy.messageError('O campo e-mail deve ser prenchido corretamente')

        });

        it('Validar campo senha vazio', () => {

            const name = faker.person.fullName()

            cy.fillName(name)
            cy.fillEmail(faker.internet.email(name))
            cy.SaveRegister()
            cy.messageError('O campo senha deve ter pelo menos 6 dígitos')

        });

        it('Validar campo senha inválido', () => {

            cy.fillName(user_date.name)
            cy.fillEmail(user_date.email)
            cy.fillPassword('123')
            cy.SaveRegister()
            cy.messageError('O campo senha deve ter pelo menos 6 dígitos')

        });

        it('Validar campo senha com sucesso!', () => {

            cy.fillName(user_date.name)
            cy.fillEmail(user_date.email)
            cy.fillPassword(user_date.password)
            cy.SaveRegister()
            cy.checkRegisterSucess(user_date.name)

        });


    });
});

