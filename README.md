=== Docker ===
<br>
docker version - показать версию клиента и статус локального сервера
<br>
docker ps - показать список запущенных контейнеров
<br>
docker ps -a - показать список всех контейнеров
<br>
docker images - показать все образы
<br>
docker volume ls - вывести список всех томов внутри докер хоста
<br>
docker network ls - показать список сетей
<br>
<br>
docker run <-it> <-d> <-e> <-p ext_port:cont_port> <-v \${PWD}:path_inside_container> <--name my_container_name> <--rm> image_name - создает контейнер из указанного образа (i - интерактивный, t - терминал, d - отсоединенный (запуск в бекграунде), e - задать переменную среды, p - открыть порт на нашем компьютере (ext_port) и пробросить его на порт контейнера (cont_port), v - переназначить корневую папку приложения (том) (где ${PWD} - путь к текущей локальной папке, path_inside_container - путь к папке внутри контейнера), --name - позволяет указать кастомное имя для контейнера, --rm - автоматически удаляет остановленный контейнер)
<br>
<br>
docker exec <-it> container_id/container_name process_name - запустить в уже запущеном контейнере с указанным id/name дополнительный процесс с именем process_name (например bash)
<br>
docker stop container_id/container_name - остановить контейнер с соответствующим id/name
<br>
docker kill container_id/container_name - остановить контейнер с соответствующим id/name принудительно.
<br>
docker rm container_id/container_name - удалить контейнер с соответствующим id/name
<br>
docker container prune - удалить все остановленные контейнеры
<br>
docker image prune -a - удалить все образы (a - кроме тех, для которых есть работающие контейнеры)
<br>
docker system prune - удалить мусорные контейнеры, образы, сети и кэш
<br>
<br>
docker container inspect container_id/container_name <| grep prop_name> - посмотреть всю тех. информацию контейнера (grep prop_name - фильтрует вывод по определенному искомому имени проперти)
<br>
docker inspect volume_name - посмотреть всю тех. информацию тома
<br>
docker logs container_id/container_name - просмотреть логи контейнера с соответствующим id/name
<br>
<br>
docker build <. OR -f docker_file_name> <-t image_name:tag_name> - создать образ (f - указать имя докерфайла для создания образа, t - указать имя и тег(опционально) создаваемого образа)
<br>
<br>
docker-compose <-f> up <-d> <--build> - запустить compose (f - указать имя compose файла, --build - пересобрать образы)
<br>
docker-compose <-f> down - остановить и удалить все контейнеры, запущенные compose
<br>
<br>
docker login - залогиниться на Docker Hub
<br>
docker push image_name - запушить образ на Docker Hub
<br>
<br>
=== BASH ===
<br>
cat file_name - вывести в терминал содержимое файла
<br>
<br>
=== SH ===
<br>
hostname - вывести id текущего контейнера (по сути это имя виртуальной машины)
<br>
hostname -i - вывести IP текущего контейнера
<br>
ls -la - посмотреть содержимое текущей папки
<br>
touch file_name - создать файл с именем file_name