---
id: panpython_qs
title: Quickstart
sidebar_label: Quickstart
---

## Introducing pan-python

> `pan-python` is a multi-tool set for Palo Alto Networks **PAN-OS**,
**Panorama**, **WildFire** and **AutoFocus**.

> The [panxapi.py](https://github.com/kevinsteves/pan-python/blob/master/doc/panxapi.rst)
command line program from pan-python will be used in the [PAN-OS XML
API](https://docs.paloaltonetworks.com/pan-os/9-0/pan-os-panorama-api.html)
labs to perform API requests.

> `pan-python` is available on GitHub at
<https://github.com/kevinsteves/pan-python>, as a [package on
PyPi](https://pypi.python.org/pypi/pan-python/) (Python Package Index),
or can be installed using
[pip](https://pip.pypa.io/en/latest/quickstart/) on Python 2.7 or 3.x.
pan-python has no dependencies.

> [Documentation](https://github.com/kevinsteves/pan-python/tree/master/doc)
is available on GitHub and as HTML from the package `doc/` directory.

## Example: Install `pan-python` Using `pip`

> Install `pan-python`:

    pip install --user pan-python

> Example output:

    Collecting pan-python
      Downloading pan-python-0.11.0.tar.gz (109kB)
        100% |                                | 112kB 2.0MB/s
    Building wheels for collected packages: pan-python
      Running setup.py bdist_wheel for pan-python ... done
      Stored in directory: /home/ubuntu/.cache/pip/wheels/f4/4c/3e/f8d30075fc8084fd786f23f7751e98a9802759539d500b24de
    Successfully built pan-python
    Installing collected packages: pan-python
    Successfully installed pan-python-0.11.0
    
> Check `pan-python` version:

    panxapi.py --version

> Example output:

    pan-python 0.11.0

> By default `pip` installs the latest version of the package.

## Lab 1

1.  Install `pan-python` using `pip` and display its version.
2.  Run **panxapi.py** with **--help** to display command line options.
3.  View
    [panxapi.py](https://github.com/kevinsteves/pan-python/blob/master/doc/panxapi.rst)
    documentation on GitHub.