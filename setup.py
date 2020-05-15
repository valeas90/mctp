#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import absolute_import

from setuptools import find_packages, setup


setup(
    name='mctp',
    version='1.0.0',
    description='My crypto trading portfolio',
    author='valeas90',
    author_email='jonvaleas@gmail.com',
    url='https://github.com/valeas90',
    packages=find_packages(exclude=["tests", "*.tests", "*.tests.*", "tests.*"]) + ['.'],
    include_package_data=True,
    scripts=[
        'manage.py',
    ]
)
