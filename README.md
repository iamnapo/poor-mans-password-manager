# @iamnapo/poor-mans-password-manager

> Simple CLI to turn memorable sentences into secure passwords

[![build](https://badges.iamnapo.me/ci/iamnapo/poor-mans-password-manager)](https://github.com/iamnapo/poor-mans-password-manager/actions) [![npm](https://badges.iamnapo.me/npm/@iamnapo/poor-mans-password-manager)](https://www.npmjs.com/package/@iamnapo/poor-mans-password-manager)

<sup><em>Inspired from a discussion with @mateuadsuara</em></sup>

## Install

```sh
npm i -g @iamnapo/poor-mans-password-manager
```

## Usage

```console
$ pmpm --help

  Simple CLI to turn memorable sentences into secure passwords

  Usage
    $ pmpm <sentence>

  Options
    --master-key    Pass a master key to create unique passwords
    --pin           Create a 4-digit PIN instead of a password

  Examples
    $ pmpm 'my github password'
    $ pmpm 'my github password' --master-key='my-master-key'
    $ pmpm 'my pin for NapoBank' --pin
```

> [!CAUTION]
> I’m not a security expert 🤷🏼‍♂️
