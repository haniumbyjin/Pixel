@RD /S /Q "C:\tmp"
start "redis" cmd /k "C:\Program Files\Redis\redis-server.exe"
start "zookeeper" cmd /k "cd .\kafka_2.12-2.2.0\bin\windows && zookeeper-server-start.bat ..\..\config\zookeeper.properties"
timeout /t 5
start "kafka" cmd /k "cd .\kafka_2.12-2.2.0\bin\windows && kafka-server-start.bat ..\..\config\server.properties"