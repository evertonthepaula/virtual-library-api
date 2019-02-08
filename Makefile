.PHONY: env apk help

mongo:
	docker run --name mongodb -p 27017:27017 -d mongo 

help:
	@echo
	@echo "  "Por que nós utilizamos make neste projeto? 
	@echo "  "Make é utilizado para executar scripts que manipulam ao ambiente de execução do projeto, seja ele ambiente de produção, homologação ou testes.
	@echo "  "Make também pode ser utilizado para executar scripts de manipulação de código, como por exemplo para fazer o deploy.
	@echo
	@echo "  "Configurações para Monsanto:"\n"
	@echo - make mongo: Inicia o serviço de banco de dados MongoDB"\n"
	@echo