FROM alpine:latest
RUN apk update
RUN apk add --no-cache imagemagick bash pngcrush optipng=0.7.7-r0

RUN mkdir -p /source
WORKDIR /source

ENTRYPOINT ["pngcrush"]
