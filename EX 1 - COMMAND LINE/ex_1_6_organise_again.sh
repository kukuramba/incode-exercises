# Utwórz strukturę plików na potrzeby tygodnia immersji, tak, aby cała struktura plików została utworzona przez jeden skrypt. 

    # - Folder „Immersion week”, który zawiera pięć podfolderów od „Day 0” do „Day 4”.
    # - W każdym folderze utwórz plik „learnings.md”, w którym zapiszesz wszystko to, co danego dnia się nauczyłeś.

#!/usr/bin/env bash

mkdir -p immersion\ week/day{0..4}
touch immersion\ week/day{0..4}/learnings.md