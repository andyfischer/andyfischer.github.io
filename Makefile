

%.js:
	tsc -p .

cv.html: build/Build.js cv.md index.template.html
	node .
