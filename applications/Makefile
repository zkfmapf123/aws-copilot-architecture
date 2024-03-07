dev-deploy:	
	@copilot svc deploy --name payment --env dev
	@copilot svc deploy --name receipt --env dev
	@copilot svc deploy --name client --env dev

dev-destroy:
	@copilot svc delete --name client --env dev
	@copilot svc delete --name receipt --env dev
	@copilot svc delete --name payment --env dev