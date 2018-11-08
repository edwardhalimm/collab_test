library(ggplot2)

data <- read.delim("Desktop/collab_test/uw-elevations.csv.bz2")

ggplot(data) + geom_point(aes(lon, lat, col=elevation))


