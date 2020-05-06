package com.occamsrazor.web.lost;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.occamsrazor.web.admin.Admin;
import com.occamsrazor.web.user.User;
import com.occamsrazor.web.util.Data;
import com.occamsrazor.web.util.Messenger;

@Repository
public class LostDaoImpl implements LostDao{

	@Override
	public void insert(Lost lost) {
		try {
			@SuppressWarnings("resource")
			BufferedWriter writer = new BufferedWriter(
									 new FileWriter(
									  new File(Data.PATH.toString()+Data.LOST_LIST+Data.CSV),true));
			
			writer.write(lost.toString());
			writer.newLine();
			writer.flush();
		}catch(Exception e){
			System.out.println(Messenger.FILE_INSERT_ERROR);
		}
	}

	@Override
	public List<Lost> selectAll() {
		List<Lost> lostlist = new ArrayList<>();	
		List<String> list = new ArrayList<>();
		try {
			File file = new File(Data.PATH.toString()+Data.LOST_LIST+Data.CSV);
			BufferedReader reader = new BufferedReader(new FileReader(file));	
			String message = "";
			while((message = reader.readLine()) != null) {
				list.add(message);
			}
			reader.close(); //다 읽었으면 닫아주기
		}catch(Exception e){
			System.out.println(Messenger.FILE_SELECT_ERROR);
		}
		
		Lost l = null;
		for(int i=0; i<list.size(); i++) {
			l = new Lost();
			String[] arr = list.get(i).split(",");
			l.setLostId(arr[0]);
			l.setName(arr[1]);
			l.setLostDate(arr[2]);
			l.setGroup(arr[3]);
			l.setLocation(arr[4]);
			lostlist.add(l);
		}			
		return lostlist;
	}

	@Override
	public Lost selectOne(String lostId) {
		List<Lost> list = selectAll();
		Lost result = null;
		for(Lost l : list) {
			if(lostId.equals(l.getLostId())) {
				result = l;
				break;
			}
		}
		return result;
	}

	@Override
	public Messenger update(Lost lost) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Messenger delete(Lost lost) {
		// TODO Auto-generated method stub
		return null;
	}

}
