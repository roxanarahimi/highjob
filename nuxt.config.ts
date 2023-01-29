// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
    publicRuntimeConfig: {
        baseURL: 'https://highjob.webagent.ir/'
    },
app:{
    head:{
        title: 'highjob',
        meta:[
            {name: "description", content: "find jobs!"}
        ],
        link: [
            {rel: 'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css', integrity:'sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N', crossorigin: 'anonymous' },
            {rel: 'stylesheet', href:'css/fonts.css' },
            {rel: 'stylesheet', href:'css/style.css' }

        ],

        script: [
            { hid: 'stripe', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' ,integrity:'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' , crossorigin:'anonymous', defer: true }
        ]
    },






    }

}