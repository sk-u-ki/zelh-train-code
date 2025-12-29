import requests
import json 
import copy
import sys
import os

url_posts = 'https://jsonplaceholder.typicode.com/posts'
url_comments = 'https://jsonplaceholder.typicode.com/comments'

cur_dir = os.path.dirname(os.getcwd())        # <--- find current directory
file_path = cur_dir + "/outputs/output_py.json"    # <--- can be improve


def get_content(url: str):
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        write_json(f"""[
                    "Status code" :  {response.status_code}
        ]""", file_path)
        sys.exit()

def convert_binary_to_dict(binary_text: str):
    return json.loads(binary_text)

def write_json(content: str, path: str):
    with open(path, "w") as file:
        json.dump(content, file, indent=4)

def merge(main, joining):
    output = copy.deepcopy(main)
    for index, main_element in enumerate(main):
        for join_element in joining:
            if main_element["postId"] == join_element["id"]:
                output[index]["post_title"] = join_element['title']
                output[index]["post_body"] = join_element['body']
                output[index]["post_userId"] = join_element['userId']
    return output

def merge_2(main, joining):
    output = copy.deepcopy(main)
    for index, main_element in enumerate(main):
        comments = []
        for joining_element in joining:
            if joining_element["postId"] == main_element["id"]:
                comments.append(joining_element)
        output[index]["comments"] = comments
    return output

def main():
    b_posts = get_content(url_posts)
    b_comments = get_content(url_comments)

    posts = convert_binary_to_dict(b_posts)
    comments = convert_binary_to_dict(b_comments)
    
    output = merge_2(posts, comments)
    
    write_json(output, file_path)
    sys.exit()

if __name__ == "__main__":
    main()