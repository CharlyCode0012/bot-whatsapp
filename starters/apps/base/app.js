const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
} = require('@bot-whatsapp/bot')

/**
 *  ATENCION: Si vas a usar el provider whatsapp-web.js
 *  recuerda ejecutar npm i whatsapp-web.js@latest
 */

const WebWhatsappProvider = require('@bot-whatsapp/provider/web-whatsapp')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowPrincipal = addKeyword(['hola', 'ole', 'HOLA'])
    .addAnswer('Bienvenido a mi tienda')
    .addAnswer('Como puedo ayudarte?')
    .addAnswer(['Tengo:', 'Zapatos', 'Bolsos', 'etc..'])

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(WebWhatsappProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
}

main()
