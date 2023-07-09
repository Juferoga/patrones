import os
import django
import random
from faker import Faker
from datetime import timedelta
from datetime import datetime, time, timedelta, date

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "dasp_project.settings")
django.setup()

from django.utils import timezone
from apps.authuser.models import User, Customer, Employee, RoleChoices, TypeIdentificationChoices
from apps.cinema.models import Cinema
from apps.product.models import Product, Snack, Ticket
from apps.movie.models import Movies
from apps.purchase.models import Purchase
from apps.theater.models import Theater
from apps.function.models import Function
from apps.seat.models import Seat
from django.db import IntegrityError


def create_users_c(n=1, role=RoleChoices.CLIENT):
    fake = Faker()
    users = []
    for _ in range(n):
        try:
            user = User.objects.create(
                n_id=fake.unique.random_number(),
                t_id=random.choice([choice[0] for choice in TypeIdentificationChoices.choices]),
                n_phone=fake.unique.random_number(digits=10),
                t_rol=role,
                email=fake.unique.email(),
                name=fake.name(),
            )
            users.append(user)
        except django.db.utils.IntegrityError:
            print("A user with this email already exists. Skipping.")
    return users


def create_users_e(n=1, role=RoleChoices.CLIENT):
    fake = Faker()
    users = []
    for _ in range(n):
        try:
            user = User.objects.create(
                n_id=fake.unique.random_number(),
                t_id=random.choice([choice[0] for choice in TypeIdentificationChoices.choices]),
                n_phone=fake.unique.random_number(digits=10),
                t_rol=role,
                email=fake.unique.email(),
                name=fake.name(),
            )
            users.append(user)
        except django.db.utils.IntegrityError:
            print("A user with this email already exists. Skipping.")
    return users



def create_customers(users):
    for user in users:
        Customer.objects.create(user_ptr_id=user.id, n_points=random.randint(0, 100))


def create_cinemas(n=5):
    fake = Faker()
    cinemas = []
    for _ in range(n):
        cinema = Cinema.objects.create(
            t_direction=fake.address(),
            t_name=fake.company(),
        )
        cinemas.append(cinema)
    return cinemas


def create_employees(users, cinemas):
    fake = Faker()
    for user in users:
        Employee.objects.create(
            user_ptr_id=user.id,
            n_salary=fake.random_int(min=1000000, max=2000000),
            d_start_contract=timezone.now(),
            fk_cinema=random.choice(cinemas),
        )


def create_theaters(n=5, cinemas=None):
    if cinemas is None:
        raise ValueError("Please provide a list of Cinemas")
    fake = Faker()
    for _ in range(n):
        Theater.objects.create(
            b_state=random.choice([True, False]),
            fk_cinema=random.choice(cinemas),
        )


def create_movies(n=5):
    fake = Faker()
    for _ in range(n):
        Movies.objects.create(
            t_genre=fake.word(),
            n_rating=random.randint(0, 5),
            t_description=fake.paragraph(),
            t_title=fake.catch_phrase(),
            n_duration=random.randint(60, 180),
        )


def create_products(n=5):
    fake = Faker()
    for _ in range(n):
        Product.objects.create(
            t_name=fake.bs(),
            t_description=fake.sentence(),
            n_price=fake.random_int(min=1000, max=20000),
        )


def create_purchases(n=5):
    fake = Faker()
    users = list(User.objects.all())
    products = list(Product.objects.all())
    for _ in range(n):
        purchase = Purchase.objects.create(
            n_total_value=fake.random_int(min=1000, max=10000),
            n_score=random.randint(1, 5),
            fk_client=random.choice(users),
        )
        purchase.fk_product.set(random.choices(products, k=random.randint(1, len(products))))


def create_seats(n=5):
    fake = Faker()
    theaters = list(Theater.objects.all())
    for _ in range(n):
        Seat.objects.create(
            t_type=fake.random_element(elements=('VIP', 'Normal', 'Economy')),
            b_state=random.choice([True, False]),
            fk_theater=random.choice(theaters),
        )

def create_functions(n=10):
    fake = Faker()
    movies = list(Movies.objects.all())
    theaters = list(Theater.objects.all())
    for _ in range(n):
        start_time = fake.time_object()
        start_datetime = datetime.combine(date.today(), start_time)
        end_datetime = start_datetime + timedelta(hours=2)
        end_time = end_datetime.time()

        Function.objects.create(
            d_date=timezone.now(),
            d_start_time=timezone.now(),
            d_end_time=timezone.now(),
            fk_movie=random.choice(movies),
            fk_theater=random.choice(theaters),
        )

def create_snacks(n=5):
    fake = Faker()
    for _ in range(n):
        Snack.objects.create(
            n_stock=fake.random_int(min=10, max=100),
            t_type=fake.word(),
            t_name=fake.bs(),
            t_description=fake.sentence(),
            n_price=fake.random_int(min=1000, max=20000),
        )


def create_tickets(n=5):
    fake = Faker()
    for _ in range(n):
        Ticket.objects.create(
            b_state=random.choice([True, False]),
            t_name=fake.bs(),
            t_description=fake.sentence(),
            n_price=fake.random_int(min=1000, max=20000),
        )


def populate_db():
    # customer_users = create_users_c(n=1, role=RoleChoices.CLIENT)
    # create_customers(customer_users)


    # employee_users = create_users_e(n=1, role=RoleChoices.EMPLOYEE)
    # create_employees(employee_users, cinemas)

    cinemas = create_cinemas(n=5)
    create_theaters(n=10, cinemas=cinemas)
    create_movies(n=10)
    create_products(n=10)
    create_purchases(n=10)
    create_seats(n=10)
    create_snacks(n=10)
    create_tickets(n=10)
    create_functions(n=10)


if __name__ == "__main__":
    print("Populating the databases...Please Wait")
    populate_db()
    print('Populating Complete')
