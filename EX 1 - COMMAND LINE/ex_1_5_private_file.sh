# Utwórz skrypt. Skrypt będzie tworzyć plik o nazwie „this_file_is_private”, do którego dostęp uzyskać może tylko właściciel pliku.
# Musisz zapoznać się informacjami na temat komendy „chmod”. Chmod pozwala na zarządzanie uprawnieniami do plików.
# Zauważ też, że musisz użyć dwóch komend: jednej do utworzenia pliku, a drugiej do zmieny uprawnień.

# Oto przykładowa sesja:
    # $> ls
    # 04_private_file.sh
    # $> sh 04_private_file.sh
    # $> ls -l
    # total 8
    # -rw-r--r--  1 laurie  wheel  69 Mar 13 09:24 04_private_file.sh
    # -rw-------  1 laurie  wheel   0 Mar 13 09:24 this_file_is_private

#!/usr/bin/env bash

touch this_file_is_private
chmod 700 this_file_is_private