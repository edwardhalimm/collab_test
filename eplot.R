library(ggplot2)

data <- read.delim("Desktop/collab_test/uw-elevations.csv.bz2")

ggplot(data) + 
  geom_point(aes(Longitude, Lattitude, col=Elevation)) + 
  scale_color_gradientn(colors=terrain.colors(10)) +
  coord_quickmap()
