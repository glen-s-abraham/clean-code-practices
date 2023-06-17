from datetime import datetime


class BlogPost:
    def __init__(self, title, description, published_date):
        self.title = title
        self.description = description
        self.publish_date = published_date


    def print(self):
        print('Title: ' + self.title)
        print('Description: ' + self.description)
        print('Published: ' + self.publish_date)


title = 'Clean Code Is Great!'
description = 'Actually, writing Clean Code can be pretty fun. You\'ll see!'
date_today = datetime.now()
formatted_date = date_today.strftime('%Y-%m-%d %H:%M')

blog_post = BlogPost(title, description, formatted_date)

blog_post.print()
