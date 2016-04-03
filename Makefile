
marked := node_modules/.bin/marked

index.html: cv.md
	$(marked) $< > $@
