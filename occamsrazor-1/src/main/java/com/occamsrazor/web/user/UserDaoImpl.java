package com.occamsrazor.web.user;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.occamsrazor.web.util.Data;
import com.occamsrazor.web.util.Messenger;

@Repository
public class UserDaoImpl implements UserDao{

	@Override
	public void insert(User user) {		
		try {
			@SuppressWarnings("resource")
			BufferedWriter writer = new BufferedWriter(
									 new FileWriter(
										new File(Data.USER_PATH.toString()+Data.USER_LIST+Data.CSV),true));
			writer.write(user.toString());
			writer.newLine();
			writer.flush(); //카톡에서 엔터는 줄바꿈이고 보내기버튼 누르면 메세지 전송하듯 보내기버튼같은거	
		}catch(Exception e){
			System.out.println(Messenger.FILE_INSERT_ERROR);
		}
		
	}

	@Override
	public List<User> selectAll() {		
		List<User> userlist = new ArrayList<>();	
		List<String> list = new ArrayList<>();
		try {
			File file = new File(Data.USER_PATH.toString()+Data.USER_LIST+Data.CSV);
			BufferedReader reader = new BufferedReader(new FileReader(file));	
			String message = "";
			while((message = reader.readLine()) != null) {
				list.add(message);
			}
			reader.close(); //다 읽었으면 닫아주기
		}catch(Exception e){
			System.out.println(Messenger.FILE_INSERT_ERROR.toString());
		}
		User u = null;
		for(int i=0; i<list.size(); i++) {
			u = new User();
			String[] arr = list.get(i).split(",");
			u.setUserid(arr[0]);
			u.setPasswd(arr[1]);
			u.setName(arr[2]);
			u.setSsn(arr[3]);
			u.setAddr(arr[4]);
			u.setAddr(arr[5]);
			u.setEmail(arr[6]);
			u.setPhoneNumber(arr[7]);
			u.setRegisterDate(arr[8]);
			userlist.add(u);
		}			
		return userlist;
	}

	@Override
	public User selectOne(String userid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(User user) {
		// TODO Auto-generated method stub
		
	}

}
