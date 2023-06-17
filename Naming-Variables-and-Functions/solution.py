class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, starting_point, length,bredth):
        self.starting_point = starting_point
        self.length = length
        self.bredth= bredth
    def calculate_area(self):
        return self.length * self.bredth
    def print_end_points(self):
        top_right = self.starting_point.x + self.length
        bottom_left = self.starting_point.y + self.bredth        
        print('Starting Point (X)): ' + str(self.starting_point.x))
        print('Starting Point (Y)): ' + str(self.starting_point.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


rectangle = Rectangle(Point(50, 100),90,10)

print(rectangle.calculate_area())
rectangle.print_end_points();