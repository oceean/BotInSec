from setuptools import setup


setup(
    name='Filish Storage',
    license='MIT',
    author='Nikolay Oceean',
    packages=['botinsec'],
    include_package_data=True,
    platforms='any',
    install_requires=[
        "python-telegram-bot==11.1.0",
        "requests==2.19.1",
        "urllib3==1.24.2",
        "xmltodict==0.11.0",
        "tabulate==0.8.2",
    ]
)