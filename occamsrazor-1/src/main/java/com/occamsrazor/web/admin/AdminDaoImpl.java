package com.occamsrazor.web.admin;

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
public class AdminDaoImpl implements AdminDao{

	@Override
	public void insert(Admin admin) {
		try {
			@SuppressWarnings("resource")
			BufferedWriter writer = new BufferedWriter(
									 new FileWriter(
									  new File(Data.ADMIN_PATH.toString()+Data.LIST+Data.CSV),true));
			
			writer.write(admin.toString());
			writer.newLine();
			writer.flush(); //카톡에서 엔터는 줄바꿈이고 보내기버튼 누르면 메세지 전송하듯 보내기버튼같은거	
		}catch(Exception e){
			System.out.println(Messenger.FILE_INSERT_ERROR);
		}
	}

	@Override
	public List<Admin> selectAll() {
		
		List<Admin> adminlist = new ArrayList<>();	
		List<String> list = new ArrayList<>();
		try {
			File file = new File(Data.ADMIN_PATH.toString()+Data.LIST+Data.CSV);
			BufferedReader reader = new BufferedReader(new FileReader(file));	
			String message = "";
			while((message = reader.readLine()) != null) {
				list.add(message);
			}
			reader.close(); //다 읽었으면 닫아주기
		}catch(Exception e){
			System.out.println(Messenger.FILE_INSERT_ERROR);
		}
		
		Admin a = null;
		for(int i=0; i<list.size(); i++) {
			a = new Admin();
			String[] arr = list.get(i).split(",");
			a.setName(arr[0]);
			a.setPosition(arr[1]);
			a.setEmail(arr[2]);
			a.setPhoneNumber(arr[3]);
			adminlist.add(a);
		}			
		return adminlist;
	}
	
	@Override
	public Admin selectOne(String employNumber) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Admin admin) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Admin admin) {
		// TODO Auto-generated method stub
		
	}

}

