SRC_DIR = src
DIST_DIR = dist

.PHONY: build clean install-deps install-typescript

build: $(DIST_DIR)/index.html $(DIST_DIR)/styles.css $(DIST_DIR)/app.js

$(DIST_DIR)/index.html: $(SRC_DIR)/index.html
	@powershell -Command "& { mkdir $(dir $@) -Force | Out-Null; Copy-Item $< $@ }"

$(DIST_DIR)/styles.css: $(SRC_DIR)/styles.css
	@powershell -Command "& { mkdir $(dir $@) -Force | Out-Null; Copy-Item $< $@ }"

$(DIST_DIR)/app.js: $(SRC_DIR)/app.ts
	tsc --project . --module es2015

clean:
	rm -rf $(DIST_DIR)

install-deps:
	npm install chart.js @types/chart.js --save

install-typescript:
	npm install -g typescript

.DEFAULT_GOAL := build