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
public class ItemDaoImpl implements ItemDao{

	@Override
	public void insert(Item lost) {
		try {
			@SuppressWarnings("resource")
			BufferedWriter writer = new BufferedWriter(
									 new FileWriter(
									  new File(Data.PATH.toString()+Data.LOSE_LIST+Data.CSV),true));
			
			writer.write(lost.toString());
			writer.newLine();
			writer.flush();
		}catch(Exception e){
			System.out.println(Messenger.FILE_INSERT_ERROR);
		}
	}

	@Override
	public List<Item> selectAll() {
		List<Item> items = new ArrayList<>();	
		List<String> list = new ArrayList<>();
		try {
			BufferedReader reader = new BufferedReader(
										new FileReader(
												new File(Data.PATH.toString()+Data.LOSE_LIST+Data.CSV)));	
			String message = "";
			while((message = reader.readLine()) != null) {
				list.add(message);
			}
			reader.close(); //다 읽었으면 닫아주기
		}catch(Exception e){
			System.out.println(Messenger.FILE_SELECT_ERROR);
		}
		
		Item i = null;
		for(String s : list) {
			i = new Item();
			String[] arr = s.split(",");
			i.setLostId(arr[0]);
			i.setName(arr[1]);
			i.setLostDate(arr[2]);
			i.setGroup(arr[3]);
			i.setLocation(arr[4]);
			items.add(i);
		}		
		return items;
	}

	@Override
	public Item selectOne(String lostId) {
		List<Item> list = selectAll();
		Item result = null;
		for(Item l : list) {
			if(lostId.equals(l.getLostId())) {
				result = l;
				break;
			}
		}
		return result;
	}

	@Override
	public Messenger update(Item lost) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Messenger delete(Item lost) {
		// TODO Auto-generated method stub
		return null;
	}

}
