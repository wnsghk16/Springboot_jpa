FROM player
WHERE team_id in(
	SELECT team_id
	FROM team
	WHERE (team_name LIKE '삼%' OR team_name LIKE '드%')
)
AND POSITION like 'MF'
AND height BETWEEN 170 AND 180;

-- 전체 축구팀의 목록을 출력하시오
-- 단, 팀명을 오름차순으로 정렬하시오.
--내림차순은 desc 

SELECT team_name FROM team
ORDER BY team_name ASC; 

--포지션의 종류를 모두 출력 중복제거

SELECT DISTINCT POSITION FROM player;

--포지션의 종류를 모두 출력하시오
--단, 중복은 제거합니다.
--포지션이 없으면 신입으로 기재

SELECT distinct case
	when POSITION like '' then '신입'
	ELSE position
	END AS POSITION
FROM player
ORDER BY POSITION;

--수원을 연고지로 하는 팀의 골키퍼는 누구인가

SELECT player_name, position FROM player
WHERE team_id in (
	SELECT team_id
	FROM team
	WHERE region_name LIKE '수원'
)
AND POSITION LIKE 'GK';

select region_name, player_name, position 
from player p, team t
where p.team_id = t.team_id
and region_name like '수원'
and position like 'GK';


-- 수원팀(ID: K02)키가 170 이상 선수
-- 이면서 성이 고씨인 선수

select team_id, player_name, height from player
where team_id like 'K02'
and player_name like '고%'
and height >= 170;


-- 광주팀 선수들 이름과
-- 키와 몸무게 목록을 출력하시오
-- 키와 몸무게가 없으면 "0" 표시하시오
-- 키와 몸무게는  내림차순으로 정렬하시오

select player_name as playerName, 
   concat(case when height like '' then '0' else height end,'cm') as height,
	concat(case when weight like '' then '0' else weight end,'kg') as weight
from player
WHERE team_id IN (
	SELECT team_id
	FROM team
	WHERE region_name LIKE '광주'
)
order by height desc, weight desc;

select player_name as playerName,
	concat(ifnull(height,'0'),'cm') as height,
	concat(ifnull(weight,'0'),'kg') as weight
from player
WHERE team_id IN (
	SELECT team_id
	FROM team
	WHERE region_name LIKE '광주'
)
order by height desc, weight desc;




-- 성남팀 선수들 이름과 포지션과
-- 키(cm표시)와 몸무게(kg표시)와  각 선수의 BMI지수를 출력하시오
-- 단, 키와 몸무게가 없으면 "0" 표시하시오
-- BMI는 "NONE" 으로 표시하시오(as bmi)
-- 최종 결과는 이름내림차순으로 정렬하시오

select player_name, 
	case when POSITION like '' then '신입' ELSE position END AS POSITION,
	concat(case when height like '' then '0' else height end,'cm') as height,
	concat(case when weight like '' then '0' else weight end,'kg') as weight,
	ifnull(round((weight*10000/(height*height)),2),'none') as bmi
from player
where team_id in(
	select team_id
	from team
	where region_name like '성남'
)
order by player_name desc;

select player_name, 
	POSITION,
	height,
	weight,
	round((weight*10000/(height*height)),2) as bmi
from player
where team_id in(
	select team_id
	from team
	where region_name like '성남'
)
order by player_name desc;

-- 4개의 테이블의 키값을 가지는 가상 테이블을 생성하시오 (join)
select b.player_id, b.team_id, b.stadium_id, sc.sche_date
from(select a.player_id, a.team_id, a.stadium_id
		from(select p.player_id, t.team_id, t.stadium_id
				from (select player_id, team_id from player) p
				join team t
				on p.team_id like t.team_id)a
		join stadium s
		on a.stadium_id like s.stadium_id) b
join schedule sc
on b.stadium_id like sc.stadium_id;

--카티션 프로덕트
select b.player_id, b.team_id, b.stadium_id, sc.sche_date
from(select a.player_id, a.team_id, a.stadium_id
		from(select p.player_id, t.team_id, t.stadium_id
				from (select player_id, team_id from player) p
				join team t using(team_id))a
		join stadium s using(stadium_id)) b
join schedule sc using(stadium_id);

-- standard join 가장 노말한 상태.. 쉽게 이렇게 처리 추천
create view full_scan as
select t.team_id, t.team_name 
from team t join player p using(team_id)
join stadium s using(stadium_id)
join schedule sc using(stadium_id);

select distinct * from full_scan
where team_id like 'K02'

drop view full_scan;

--수원팀과 대전팀 선수들 중 포지션이 골키퍼(GK)인 선수를 출력하시오 
--단, 팀명, 선수명 오름차순정렬

select t.team_id, t.team_name, p.player_name, p.position
from team t join player p using(team_id)
where (t.region_name like '수원' or t.region_name like '대전')
and p.POSITION like 'GK'
order by 2, 3;


--팀과 연고지를 연결해서 출력하시오
-- [팀명]					[홈구장]	
--수원[]삼성블루윙즈	원월드컵경기장

select concat(t.region_name,' ',t.team_name) as '팀명', s.stadium_name as '홈구장' 
from team t join stadium s using(stadium_id);


--수원팀(K02)과 대전팀(K10) 선수들 중
--키가 180 이상 183 이하인 선수들
--키, 팀명, 사람명 오름차순 

select p.height, t.team_name, p.player_name 
from team t join player p using(team_id)
where (t.region_name like '수원' or t.region_name like '대전')
and p.height between 180 and 183
order by 1,2,3;

--모든 선수들 중 포지션을 배정받지 못한 선수들의 팀명과 선수 이름 출력 
--둘다오름차순

select t.team_name, p.player_name
from team t join player p using(team_id)
where position like ''
order by 1, 2;



-- 팀과 스타디움, 스케줄을 조인하여
-- 2012년 3월 17일에 열린 각 경기의
-- 팀이름, 스타디움, 어웨이팀 이름 출력
-- 다중테이블 join 을 찾아서 해결하시오.
select b.team_name, b.stadium_name, 
		(select team_name from team where team_id like b.awayteam_id) as 'awayteam_name', 
		b.sche_date
from(select a.team_name, a.stadium_name, sc.awayteam_id, sc.sche_date
		from (select t.team_name, s.stadium_name, s.stadium_id
				from team t 
				join stadium s using(stadium_id))a
		join schedule sc 
		using(stadium_id)) b
where b.sche_date like '20120317';


-- 2012년 3월 17일 경기에
-- 포항 스틸러스 소속 골키퍼(GK)
-- 선수, 포지션,팀명 (연고지포함),
-- 스타디움, 경기날짜를 구하시오
-- 연고지와 팀이름은 간격을 띄우시오
select c.player_name, c.position, concat(c.region_name,' ',c.team_name)as'팀명', c.stadium_name, c.sche_date
from(select b.player_name, b.position, b.region_name, b.team_name, b.stadium_name, sc.sche_date
		from(select a.player_name, a.position, a.region_name, a.team_name, s.stadium_name, s.stadium_id
				from (select p.player_name, p.position, t.region_name, t.team_name, t.team_id, t.stadium_id
						from team t 
						join player p using(team_id))a
				join stadium s 
				using(stadium_id)) b
			join schedule sc 
			using(stadium_id)) c
where c.sche_date like '20120317'
and c.region_name like '포항'
and c.position like 'GK';


-- 홈팀이 3점이상 차이로 승리한 경기의
-- 경기장 이름, 경기 일정
-- 홈팀 이름과 원정팀 이름을
-- 구하시오
select s.stadium_name, sc.sche_date, 
		(select team_name from team where team_id like sc.hometeam_id) as '홈팀이름',
		(select team_name from team where team_id like sc.awayteam_id) as '원정팀이름',
		sc.home_score, sc.away_score, (home_score - away_score) as'점수차'
from stadium s join schedule sc using(stadium_id)
where (home_score - away_score)>=3;



-- STADIUM 에 등록된 운동장 중에서
-- 홈팀이 없는 경기장까지 전부 나오도록
-- 카운트 값은 20

select s.stadium_name, t.team_name
from stadium s left join team t using(stadium_id);

 
-- (퍼지네이션) limit 0부터5개
select player_name from player
order by player_name limit 5,5;

--goup by : 집계함수 5개 (min max count sum avg)
-- 평균키가 인천 유나이티스팀의 평균키(176.59)  보다 작은 팀의
-- 팀ID, 팀명, 평균키 추출

select t.team_id as 팀ID , t.team_name as 팀명, round(avg(p.height),2) as '평균키'
from team t join player p using(team_id)
group by team_id
having round(avg(p.height),2) < (select round(avg(p.height),2)
												from team t join player p using(team_id)
												where region_name like '인천');

-- 20…포지션이 MF 인 선수들의 소속팀명 및  선수명, 백넘버 출력
select t.team_name, p.player_name, p.back_no, p.position
from team t join player p using(team_id)
where p.position like 'MF'


update player set height = '0', weight = '0'
where height like '' or weight like '';
select * from player;

-- 21…가장 키큰 선수 5 추출, 단 키  값이 없으면 제외
select player_name, height
from player
order by height desc limit 0,5;


-- 22…선수 자신이 속한 팀의 평균키보다 작은  선수 정보 출력
select team_name, p.*
from player p join team t using(team_id)
where height != '0' 
and height < (select round(avg(p2.height),2)
						from player p2
						where p.team_id like p2.team_id
						and p2.height != '0'
						group by p2.team_id);
						
select team_name, round(avg(height),2)
from player p join team t using(team_id)
where height != '0'
and team_name like '스틸러스'
group by team_id;

select team_name, player_name, height
from player p join team t using(team_id)
where team_name like '스틸러스';


-- 23….2012년 5월 한달간 경기가 있는 경기장  조회

select distinct stadium_name
from stadium s join schedule sc using(stadium_id)
where sche_date like '201205%';

--24..-- 이현 선수 소속팀의 선수명단 출력
--X.PLAYER_NAME 선수명
--    ,X.POSITION 포지션
--    ,X.BACK_NO 백넘버
select distinct team_id, player_name, POSITION, back_no
from player
where team_id like (select team_id
								from player
								where player_name like '이현');


--25…-- 팀별 포지션별 인원수와 팀별 전체  인원수 출력
select team_name,
		ifnull(sum(case when position like 'MF' then 1 end),0) as 미드필더,
		ifnull(sum(case when position like 'FW' then 1 end),0) as 공격수,
		ifnull(sum(case when position like 'DF' then 1 end),0) as 수비수,
		ifnull(sum(case when position like 'GK' then 1 end),0) as 골키퍼,
		count(*) as 전체인원수
from player p join team t using(team_id)
group by team_name;

--26.  전체 선수들의  포지션별 평균 키 및 전체 평균 키 출력
SELECT 
ROUND(AVG(CASE WHEN POSITION like 'MF' THEN HEIGHT END),2) 미드필더,
ROUND(AVG(CASE WHEN POSITION like 'FW' THEN HEIGHT END),2) 공격수,
ROUND(AVG(CASE WHEN POSITION like 'DF' THEN HEIGHT END),2) 수비수,
ROUND(AVG(CASE WHEN POSITION like 'GK' THEN HEIGHT END),2) 골키퍼,
ROUND(AVG(HEIGHT),2) 전체평균키
from player
where height != '0';




select * from player;















































select * from kteam;

CREATE TABLE kteam(
 team_id VARCHAR(10) PRIMARY KEY, 
 team_name VARCHAR(40), 
 address VARCHAR(80), 
 tel VARCHAR(20), 
 homepage VARCHAR(80)
)DEFAULT CHARSET = UTF8;

CREATE TABLE center(
 center_id VARCHAR(10) PRIMARY KEY,
 business_id VARCHAR(10),
 place_id VARCHAR(10),
 application_date VARCHAR(10),
 team_id VARCHAR(10), 
 pupose VARCHAR(40), 
 users_num VARCHAR(10),
 start_date VARCHAR(10),
 end_date VARCHAR(10),
 perform_status VARCHAR(10),
 price VARCHAR(20),
 reservation_date VARCHAR(50),
 write_date VARCHAR(50),
 update_date VARCHAR(50),
 offline_status VARCHAR(10),
 foreign key(team_id) REFERENCES kteam(team_id)
)DEFAULT CHARSET = UTF8;









