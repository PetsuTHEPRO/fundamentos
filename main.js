new Vue({
    el: '#main',
    data: {
        name: '',
        description: 'Passe o mouse para exibir informações!',
        icones: '',
        perfil: {
            1: {
                name: 'José Francisco',
                description: 'Especialista em Produtos: Sou especialista em produtos de hardware e estou atualizado com as últimas tendências e tecnologias do setor. Eu forneço informações técnicas e consultoria aos clientes, ajuda na seleção dos melhores produtos para atender às necessidades do cliente e mantém-se atualizado sobre as especificações e características dos produtos disponíveis.'
            },
            2: {
                name: 'José Peterson',
                description: 'Gerente de Vendas: Sou responsável em liderar a equipe de vendas, definir metas, desenvolver estratégias para impulsionar as vendas e garantir um excelente atendimento ao cliente. Eu supervisiono o desempenho da equipe, analiso os relatórios de vendas, estabeleço parcerias com fornecedores e busca oportunidades de crescimento no mercado.'
            },
            3: {
                name: 'Rafael',
                description: 'CEO da empresa: Eu estou encarregado de definir a visão estratégica e o direcionamento geral da organização. Eu tomo as decisões de alto nível, estabeleço metas e objetivos, desenvolvo parcerias estratégicas, gerencio as finanças da empresa e sou responsável por liderar a equipe executiva.'
            },
            4: {
                name: 'Ramon',
                description: 'Logística e Estoquista: Sou responsável pela gestão do estoque, recebimento de mercadorias, controle de inventário e organização do armazém. Eu também cuido da embalagem e envio dos produtos aos clientes, garantindo que as entregas sejam feitas de forma eficiente e dentro do prazo estabelecido.'
            },
            5: {
                name: 'Macio',
                description: 'Marketing Digital: Sou responsável pela estratégia de marketing digital da empresa. Eu gerencio as mídias sociais, crio campanhas de publicidade online, otimizo a presença online da empresa e monitora as métricas de desempenho para garantir a eficácia das estratégias de marketing.'
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