# Pixel

팀명 : Pixel  
프로젝트명 : MeetView(Conference manager)

## Dependency

### Kafka

1. Download Kafka 2.2.1([Kafka Download Link](http://mirror.navercorp.com/apache/kafka/2.2.1/kafka_2.12-2.2.1.tgz))
   - Site link : [Kafka Link](https://kafka.apache.org/downloads#2.2.1)
2. Move the folder from download folder to `Pixel/`

### Redis

1. Download Redis 3.2.1([Redis Download Link](https://github.com/microsoftarchive/redis/releases/download/win-3.2.100/Redis-x64-3.2.100.msi))
   - Site link : [Redis Link](https://github.com/microsoftarchive/redis/releases)
2. Install redis

## How to run

### Back-end

1. Start `run_kafka_win.bat` (Only support windows)
   - If OS is not Windows, Try to start `kafka`.
2. Install Redis
3. Start Redis.
4. Start Pixel_release.jar

### Front-end

1. Check the proxy in package.json
2. npm start

## 프로젝트 정의
믿뷰(MeetView) - 참여도 측정 및 핵심 내용 리포트 화상회의 소프트웨어 개발

## 프로젝트 기능
화상회의, 영상공유(멀티 스크린 지원), 파일공유(대용량), 메신저, 음성통화, STT(Speech To Text), 회의록 시각화

## 프로젝트 구조
![0  프로젝트 아키텍처](https://user-images.githubusercontent.com/19161231/57301103-2aecf380-7113-11e9-9726-c013b8bd819e.png)


## 역할 분담

Front-end : 김하늘
Back-end : 이예지, 진소린, 최용석
