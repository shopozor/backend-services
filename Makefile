bootstrap:
	@yarn
	@yarn bootstrap

down:
	make --directory backend down
	make --directory frontend down

lint:
	@./scripts/check_linting.sh

dev.backend.start:
	@make --directory backend dev.start

dev.backend.end:
	@make --directory backend dev.end

dev-test: down
  # Setup
	@make --directory backend build
	@make bootstrap
	@make --directory backend fixtures.generate
	@make --directory backend up
	# Backend unit tests
	@make --directory backend test.unit
	# Backend integration tests
	@make --directory backend seed-database
	@make --directory backend test.integration
	@make --directory backend unseed-database
	# Frontend ui tests
	@make --directory frontend dev-test.unit
	# Frontend integration tests
	@make --directory backend seed-database
	@make --directory frontend dev-build
	@make --directory frontend dev-test.integration
	@make --directory backend unseed-database
	# E2e tests
	@make --directory backend seed-database
	@make --directory frontend dev-build
	@make --directory frontend dev-test.e2e
	@make --directory backend unseed-database
	# Shutdown
	@make down