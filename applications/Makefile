dev-deploy:	
	@copilot svc deploy --name payment --env dev
	@copilot svc deploy --name receipt --env dev
	@copilot svc deploy --name client --env dev

dev-destory:
	@copilot svc delete client
	@copilot svc delete receipt
	@copilot svc delete payment