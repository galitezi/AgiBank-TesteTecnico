# Título  "Automação de Teste Desempenho com Jmeter  - Agibank - QATeste 
Teste técnico Performance

## Descrição 
O que faz: 
Acessa Automação aplicação WEB - blazedemo:  https://www.blazedemo.com 
realiza a compra de passagem aérea - Passagem comprada com sucesso.
Validar Teste de Desempenho , com critério de Aceitação: "250 requisições por segundo com um tempo de resposta 90th percentil inferior a 2 segundos."

Como foi construído: 
FOi construído utilizando Jmeter 

## pré-requisito 
Instalar JAVA  - jdk-21_windows-x64_bin.msi
Instalar Jmeter - apache-jmeter-5.6.3.zip

## objetivo
Criar um script de performance para a URL: https://www.blazedemo.com
Cenário: * Compra de passagem aérea - Passagem comprada com sucesso.
e atenda o critério de Aceitação: "250 requisições por segundo com um tempo de resposta 90th percentil inferior a 2 segundos."

## Links Úteis:
Como baixar e instalr manualmente o java em meu computador windows - https://www.java.com/pt-br/download/help/windows_manual_download.html
Como baixar e instalar apache jmeter em etapas fáceis - https://www.guru99.com/pt/guide-to-install-jmeter.html 

## Plano de Teste 
Test Plan Agibank - blazedemo.jmx

Porque , foi construído para validar os cenários de teste, abaixo descritos: 
Plano de Teste # Validação Seleção Origem - destino e compra da passagem com sucesso 
 >Selecionado Origem 
 >Selecionado Destino 
 >Ação Solicitar Passagem 
Selecionar Passagem mais em conta 
 > Ação informar dados para compra da passagem 
 > Ação confirmar comprar 
 > Exibição mensagem de sucesso 

objetivo deste plano de teste
Validar a simulação de 250 requisições por segundo com um tempo de resposta 90th percentil inferior a 2 segundos.


##Resultado esperado: 
Execução com sucesso - dos parâmetros do critério de aceite 

## Summary Report 
“O critério de aceite foi validado através do Aggregate Report, garantindo que o percentil 90 do tempo de resposta permanecesse abaixo de 2 segundos durante o período de sustentação.”

📌 Importante esclarecer:
O Summary Report NÃO exibe percentis (P90, P95, P99).
Ele é usado para visão geral de desempenho e estabilidade.
A validação do critério de aceite (P90 < 2s) deve ser feita no Aggregate Report ou Percentiles Report.

📌 Com base nos relatórios apresentados:
P90 (Aggregate Report) < 2s ✅
Throughput estável acima da meta ✅
0% de erro ✅

🎯 Conclusão técnica correta
O Summary Report confirma estabilidade, volume e ausência de erros, enquanto o Aggregate Report comprova que o percentil 90 do tempo de resposta permaneceu abaixo de 2 segundos durante o período de sustentação, validando o critério de aceite.

## Aggregate Report
Campos do Aggregate Report do Apache JMeter

✅ Pontos positivos
✔ Throughput total 320 req/s (acima da meta de 250 req/s)
✔ 0% de erro
✔ Mediana abaixo de 1,3s na maioria dos fluxos
⚠ Pontos de atenção
⚠ P90 de “Selecionar Origem e Destino” = 2061 ms
Muito próximo do limite de 2s
Qualquer aumento de carga pode estourar o SLA
⚠ P99 acima de 2,6s
Alguns usuários terão experiência ruim

📌 Com base nos relatórios apresentados:
P90 (Aggregate Report) < 2s ✅
Throughput estável acima da meta ✅
0% de erro ✅

## conclusão 
🎯 Conclusão em linguagem de negócio
O Summary Report confirma estabilidade, volume e ausência de erros, enquanto o Aggregate Report comprova que o percentil 90 do tempo de resposta permaneceu abaixo de 2 segundos durante o período de sustentação, validando o critério de aceite.
Contudo, o sistema suporta a carga de 250 usuários simultâneos e mantém throughput acima de 250 req/s, porém o tempo de resposta no percentil 90 está no limite do SLA, indicando risco de degradação sob picos.”

##Autor: 
Thiago E. Galitezi
LinkedIn: https://linkedin.com/in/thiagogalitezi
Page: https://www.galitezi.com.br/
MailTo:galitezi@gmail.com
