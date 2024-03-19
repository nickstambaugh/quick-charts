SRC_DIR = src
DIST_DIR = dist

.PHONY: build clean

build: $(DIST_DIR)/index.html $(DIST_DIR)/styles.css $(DIST_DIR)/app.js

$(DIST_DIR)/index.html: $(SRC_DIR)/index.html
	@powershell -Command "& { mkdir $(dir $@) -Force | Out-Null; Copy-Item $< $@ }"

$(DIST_DIR)/styles.css: $(SRC_DIR)/styles.css
	@powershell -Command "& { mkdir $(dir $@) -Force | Out-Null; Copy-Item $< $@ }"

$(DIST_DIR)/app.js: $(SRC_DIR)/app.ts
	tsc --project .

clean:
	rm -rf $(DIST_DIR)

.DEFAULT_GOAL := build