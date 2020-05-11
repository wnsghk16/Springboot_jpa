SELECT player_name AS '선수이름', back_no AS '백넘버', POSITION AS '포지션', height AS '키'
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



;

select b.team_id, b.player_id, b.stadium_id, sc.sche_date from schedule sc
join(select a.team_id, a.player_id, a.stadium_id from stadium s
	  join(select p.player_id, t.team_id, t.stadium_id from team t
			  join player p 
			  on t.team_id like p.team_id) a
	  on s.stadium_id like a.stadium_id) b
on sc.stadium_id like b.stadium_id;

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

select * from team t
join player p on t.team_id like p.team_id
join stadium s on t.stadium_id like s.stadium_id
join schedule sc on s.stadium_id like sc.stadium_id;