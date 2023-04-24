package utils.file;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

/**
 * read directory and create config.js
 */
public class ReadFiles {
    static HashMap<String, HashMap<String, String>> map = new HashMap<>();

    public static HashMap<String, HashMap<String, String>> readFile(String filepath) throws IOException {
        try {
            File file = new File(filepath);
            if (!file.isDirectory()) {
            } else if (file.isDirectory()) {
                String[] filelist = file.list();
                HashMap<String, String> files = new HashMap<>();
                for (int i = 0; i < filelist.length; i++) {
                    File readfile = new File(filepath + "/" + filelist[i]);
                    if (!readfile.isDirectory()) {
                        final var split = filepath.split("/");
                        StringBuilder sb = new StringBuilder();
                        for (int j = 1; j < split.length; j++) {
                            if (j != 1) {
                                sb.append("/");
                            }
                            sb.append(split[j]);
                        }
                        files.put(readfile.getName().replaceFirst("[.][^.]+$", ""), sb + "/" + filelist[i].replaceFirst("[.][^.]+$", ""));
                    } else if (readfile.isDirectory()) {
                        readFile(filepath + "/" + filelist[i]);
                    }
                }
                map.put(file.getName(), files);
            }

        } catch (FileNotFoundException e) {
        }
        return map;
    }

    public static void createFile() throws IOException {
        String filePath = "resource/construction";
        File dir = new File(filePath);
        // 一、检查放置文件的文件夹路径是否存在，不存在则创建
        if (!dir.exists()) {
            dir.mkdirs();// mkdirs创建多级目录
        }
        File checkFile = new File("resource/.vuepress/config.js");
        FileWriter writer = null;
        try {
            // 二、检查目标文件是否存在，不存在则创建
            if (!checkFile.exists()) {
                checkFile.createNewFile();// 创建目标文件
            }
            // 三、向目标文件中写入内容
            // FileWriter(File file, boolean append)，append为true时为追加模式，false或缺省则为覆盖模式
            writer = new FileWriter(checkFile, false);
            StringBuilder sb = new StringBuilder();
            sb.append("module.exports = {\n" +
                    "    title: 'Notes',\n" +
                    "    description: '办法总比问题多',\n" +
                    "    base: '/ifan/',\n" +
                    "    themeConfig: {\n" +
                    "        nav: [\n" +
                    "            {text: '首页', link: '/'},\n" +
                    "            {\n" +
                    "                text: 'what?',\n" +
                    "                items: [\n" +
                    "                    {text: 'Github', link: 'https://github.com/IFANx'},\n" +
                    "                    {text: 'Gitee', link: 'https://gitee.com/IFANx'}\n" +
                    "                ]\n" +
                    "            }\n" +
                    "        ],\n" +
                    "        sidebar: [\n");
            sb.append(readFileAndCreateJs(filePath));
            sb.append("        ]\n" +
                    "    }\n" +
                    "}\n" +
                    "\n");
            writer.append(sb);
            writer.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (null != writer)
                writer.close();
        }
    }


    public static String readFileAndCreateJs(String filePath) throws IOException {
        StringBuilder stringBuilder = new StringBuilder();
        final var stringHashMapHashMap = readFile(filePath);
        stringBuilder.append(createSideBar(stringHashMapHashMap));
        return stringBuilder.toString();
    }

    public static String createSideBar(HashMap<String, HashMap<String, String>> stringHashMapHashMap) {
        StringBuilder sb = new StringBuilder();
        for (Map.Entry<String, HashMap<String, String>> entry : stringHashMapHashMap.entrySet()) {
            sb.append(String.format("               {\n" +
                    "                title: '%s',\n" +
                    "                sidebarDepth: 3,\n" +
                    "                collapsable: true,\n" +
                    "                children: [\n", entry.getKey()));
            for (Map.Entry<String, String> entrySon : entry.getValue().entrySet()) {
                System.out.println(entrySon.getKey() + ":" + entrySon.getValue());
                sb.append(String.format("                       {   title: \"%s\", path: \"/%s\" },\n", entrySon.getKey(), entrySon.getValue()));
            }
            sb.append("                ]\n" +
                    "            },");
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        try {
            createFile();
        } catch (IOException exception) {
            exception.printStackTrace();
        }
    }
}
