PATH := ./node_modules/.bin:${PATH}

.PHONY: dev build build-examples run-examples

dev:
	pnpm dev

build:
	pnpm build

build-examples: build
	cp -R dist/*.js examples