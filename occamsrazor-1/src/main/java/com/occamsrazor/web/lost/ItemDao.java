package com.occamsrazor.web.lost;

import java.util.List;

import com.occamsrazor.web.util.Messenger;

public interface ItemDao {
	public void insert(Item lost);
	public List<Item> selectAll();
	public Item selectOne(String lostId);
	public Messenger update(Item lost);
	public Messenger delete(Item lost);
}
