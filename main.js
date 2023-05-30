new Vue({
    el: '#main',
    data: {
        name: '',
        description: 'Passe o mouse para exibir informações!',
        icones: '',
        perfil: {
            1: {
                name: 'José Peterson',
                description: 'Olá, sou um desenvolvedor Full Stack, especializado em Front-end e Desktop. Tenho experiência em tecnologias como Java, Spring Boot, Hibernate, Mysql e Vue, e trabalho com dedicação para produzir soluções inovadoras e eficientes para os clientes.'
            },
            2: {
                name: 'José Francisco',
                description: 'Tudo bem? Eu sou especialista em desenvolvimento back-end. Precisar de uma solução de software com PHP, Laravel, Node, Python, JS e C. Ofereço soluções personalizadas e eficientes para atender às suas necessidades.'
            },
            3: {
                name: 'Ramon',
                description: 'Seja bem-vindo! Ofereço serviços de alta qualidade na área de design e desenvolvimento front-end, com ampla experiência com HTML/CSS. Estou pronto para atender às suas necessidades e garantir um resultado incrível.'
            }
        }
    },
    methods: {
        setPerfil(value) {
            this.name = this.perfil[value].name;
            this.description = this.perfil[value].description;

            const duration = 200;
            const descricao = document.querySelector('.descricao');
            descricao.style.opacity = 0;
            setTimeout(() => {
                // altera os dados
                
          
                // faz o fade-in da div .descricao
                descricao.style.opacity = 1;
              }, duration);
            
        }
    }
});