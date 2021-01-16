# Django/React Full-stack Web Application

*This project is still under "construction." Development started Friday, January 15th, 2021.*
*As of init commit, this is a barebones website built with Django and Django REST Framework for the backend and React.js for the frontend.*

**This is a working project. I'm currently fixing the frontend design to a modern standard and will then move on to creating a more robust backend.**

## Requirements

* Python v3.8.3
* node.js v14.5
* React.js v17.0.1
* Webpack v5.14
* virtualenv v20.1

## Setup

1. Create an empty directory and clone the repository

`mkdir django-react && cd django-react && git clone https://github.com/pizdetz/django-react.git`

2. Create a virtualenv instance 

`virtualenv venv`

3. Start up virtual environment (this will host our Django dependencies)

Windows: `source venv\Scripts\activate`

4. Install Django and backend dependencies

`pip3 install -r requirements.txt`

5. Make migrations

`python manage.py makemigrations && python manage.py migrate`

6. Open a new bash/prompt in the same folder and install frontend dependencies

`cd frontend && npm i`

7. Run development script to build frontend into static folder

`npm run dev`

8. On your original bash window (in root folder, not frontend) with the virtual environment still running,

`python manage.py runserver`

This should startup your Django server and post to [localhost:8000](http://localhost:8000/)
To create/edit/delete/view leads, visit [api/lead](http://localhost:8000/api/lead)
