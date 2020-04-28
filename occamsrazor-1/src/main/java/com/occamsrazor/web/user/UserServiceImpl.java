package com.occamsrazor.web.user;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.swing.JOptionPane;

import java.util.Set;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
	private Map<String, Object> map; //키값으로 찾기때문에 count 필요 없음
	public final static String FILE_PATH = "C:\\Users\\bit22\\spring-workspace\\occamsrazor\\src\\main\\resources\\static\\user\\";
	
	public UserServiceImpl() {
		map = new HashMap<>();
	}
	

	@Override
	public void add(User user) {
		map.put(user.getUserid(), user);
	}
	
	@Override
	public int count() {
		return map.size();
	}	
	@Override
	public User login(User user) {
		User returnUser = null;
		if(map.containsKey(user.getUserid())) { //키와 일치하는게 있으면
			User u = detail(user.getUserid()); // 그 키를가진 user정보를 u에 넣고
			if(user.getPasswd().equals(u.getPasswd())) { //입력받은 비밀번호와 유저의 비밀번호 비교해서 같으면
				returnUser = u; //유저 정보를 반환함
			}
		}		
		return returnUser;
	}
	@Override
	public User detail(String userid) {
		return (User) map.get(userid); //다운캐스팅
	}
	@Override
	public boolean update(User user) { //로그인한 상태에서 업데이트하는거라서 무조건 true
		map.replace(user.getUserid(), user);
		return true;
	}
	@Override
	public boolean delete(String userid) { //로그인한 상태에서 삭제하는거라서 무조건 true
		map.remove(userid);
		return true;
	}
	@Override
	public List<User> list() { //map으로 된걸 list에 옮겨담아야한다.		
		List<User> list = new ArrayList<>();
		@SuppressWarnings("rawtypes")
		Set set = map.entrySet(); //map은 인덱스가 없기때문에 set을 사용
		@SuppressWarnings("rawtypes")
		Iterator it = set.iterator(); // = getIterator set안을 돌아다닐수 있는 거(for을 못쓰기때문)
		while(it.hasNext()) {  //다음값이 없으면 false반납/ 몇개인지 모르기때문에 while쓴다
			@SuppressWarnings("unchecked")
			Map.Entry<String, User> e = (Entry<String, User>) it.next();
			list.add(e.getValue()); //키를 제거하고 인덱스를 붙이려해서 list
		}
		for(int i=0; i<list.size(); i++) {
			System.out.println(list.get(i));
		}
		return list;
	}
	

}
